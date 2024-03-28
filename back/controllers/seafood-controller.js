const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Create a new seafood
exports.createSeafood = async (req, res, next) => {
  const { shrimp, shellfish, crab, fishType, quantity } = req.body;
  try {
    const seafood = await prisma.seafood.create({
      data: {
        shrimp,
        shellfish,
        crab,
        fishType,
        quantity,
      },
    });
    res.status(201).json({ seafood });
  } catch (error) {
    next(error);
  }
};

// Get all seafood
exports.getAllSeafood = async (req, res, next) => {
  try {
    const seafood = await prisma.seafood.findMany();
    res.status(200).json({ seafood });
  } catch (error) {
    next(error);
  }
};

// Get seafood by ID
exports.getSeafoodById = async (req, res, next) => {
  const seafoodId = req.params.id;
  try {
    const seafood = await prisma.seafood.findUnique({
      where: { id: parseInt(seafoodId) },
    });
    if (!seafood) {
      return res.status(404).json({ message: "Seafood not found" });
    }
    res.status(200).json({ seafood });
  } catch (error) {
    next(error);
  }
};

// Update seafood by ID
exports.updateSeafoodById = async (req, res, next) => {
  const seafoodId = req.params.id;
  const { shrimp, shellfish, crab, fishType, quantity } = req.body;
  try {
    const updatedSeafood = await prisma.seafood.update({
      where: {
        id: parseInt(seafoodId),
      },
      data: {
        shrimp,
        shellfish,
        crab,
        fishType,
        quantity,
      },
    });
    res.status(200).json({ seafood: updatedSeafood });
  } catch (error) {
    next(error);
  }
};

// Delete seafood by ID
exports.deleteSeafoodById = async (req, res, next) => {
  const seafoodId = req.params.id;
  try {
    await prisma.seafood.delete({
      where: {
        id: parseInt(seafoodId),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
