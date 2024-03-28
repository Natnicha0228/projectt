const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Create a new shipping address
exports.createShippingAddress = async (req, res, next) => {
  const { firstName, lastName, phone, email, address, province, district, userId } = req.body;
  try {
    const shippingAddress = await prisma.shipping_Address.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        address,
        province,
        district,
        user: { connect: { id:parseInt(userId ) } },
      },
    });
    res.status(201).json({ shippingAddress });
  } catch (error) {
    next(error);
  }
};

// Get all shipping addresses
exports.getAllShippingAddresses = async (req, res, next) => {
  try {
    const shippingAddresses = await prisma.shipping_Address.findMany();
    res.status(200).json({ shippingAddresses });
  } catch (error) {
    next(error);
  }
};

// Get shipping address by ID
exports.getShippingAddressById = async (req, res, next) => {
  const shippingAddressId = req.params.id;
  try {
    const shippingAddress = await prisma.shipping_Address.findUnique({
      where: { id: parseInt(shippingAddressId) },
    });
    if (!shippingAddress) {
      return res.status(404).json({ message: "Shipping address not found" });
    }
    res.status(200).json({ shippingAddress });
  } catch (error) {
    next(error);
  }
};

// Update shipping address by ID
exports.updateShippingAddressById = async (req, res, next) => {
  const shippingAddressId = req.params.id;
  const { firstName, lastName, phone, email, address, province, district, userId } = req.body;
  try {
    const updatedShippingAddress = await prisma.shipping_Address.update({
      where: {
        id: parseInt(shippingAddressId),
      },
      data: {
        firstName,
        lastName,
        phone,
        email,
        address,
        province,
        district,
        user: { connect: { id: userId } },
      },
    });
    res.status(200).json({ shippingAddress: updatedShippingAddress });
  } catch (error) {
    next(error);
  }
};

// Delete shipping address by ID
exports.deleteShippingAddressById = async (req, res, next) => {
  const shippingAddressId = req.params.id;
  try {
    await prisma.shipping_Address.delete({
      where: {
        id: parseInt(shippingAddressId),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
