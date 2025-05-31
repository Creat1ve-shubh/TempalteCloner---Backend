// routes/templates.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma'); // Import Prisma client for DB access
const authMiddleware = require('../middleware/auth'); // Import authentication middleware

const prisma = new PrismaClient(); // Instantiate Prisma client

// 🧠 GET base and cloned templates
router.get('/user', authMiddleware, async (req, res) => {
    const userId = req.userId; // Get user ID from auth middleware

    try {
        // Fetch templates with no owner (base templates)
        const baseTemplates = await prisma.template.findMany({ where: { ownerId: null } });
        // Fetch templates owned by the current user (cloned templates)
        const userClones = await prisma.template.findMany({ where: { ownerId: userId } });

        // Respond with both base and user templates combined
        res.json([...baseTemplates, ...userClones]);
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ error: "Failed to fetch templates" }); // Send error response
    }
});

// 📦 POST clone a template
router.post('/clone', authMiddleware, async (req, res) => {
    try {
        const { baseTemplateId, subject, body } = req.body; // Extract data from request body

        // Find the base template by ID
        const base = await prisma.template.findUnique({
            where: { id: parseInt(baseTemplateId, 10) },
        });

        // If base template not found, return 404
        if (!base) {
            return res.status(404).json({ error: "Base template not found" });
        }

        // Create a new template as a clone, linked to the user
        const newTemplate = await prisma.template.create({
            data: {
                baseTemplateId: base.id, // Reference to the base template
                subject,                 // Subject from request
                body,                    // Body from request
                ownerId: req.userId,     // Set owner to current user
                createdAt: new Date(),   // Set creation date
            },
        });

        res.status(201).json(newTemplate); // Respond with the new template
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ error: "Something went wrong while cloning template" }); // Send error response
    }
});

module.exports = router; // Export the router for use in server.js
