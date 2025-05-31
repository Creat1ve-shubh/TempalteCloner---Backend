// routes/templates.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const authMiddleware = require('../middleware/auth');

const prisma = new PrismaClient();

// 🧠 GET base and cloned templates
router.get('/user', authMiddleware, async (req, res) => {
    const userId = req.userId;

    try {
        const baseTemplates = await prisma.template.findMany({ where: { ownerId: null } });
        const userClones = await prisma.template.findMany({ where: { ownerId: userId } });

        res.json([...baseTemplates, ...userClones]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch templates" });
    }
});

// 📦 POST clone a template
router.post('/clone', authMiddleware, async (req, res) => {
    try {
        const { baseTemplateId, subject, body } = req.body;

        const base = await prisma.template.findUnique({
            where: { id: parseInt(baseTemplateId, 10) },
        });

        if (!base) {
            return res.status(404).json({ error: "Base template not found" });
        }

        const newTemplate = await prisma.template.create({
            data: {
                baseTemplateId: base.id,
                subject,
                body,
                ownerId: req.userId,
                createdAt: new Date(),
            },
        });

        res.status(201).json(newTemplate);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong while cloning template" });
    }
});

module.exports = router;
