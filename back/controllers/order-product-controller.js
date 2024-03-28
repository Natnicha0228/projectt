const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Create a new order product
exports.createOrderProduct = async (req, res, next) => {
  const { quantity, orderId, seafoodId } = req.body;
  try {
    const orderProduct = await prisma.order_product.create({
      data: {
        quantity,
        orderId,
        seafoodId,
      },
    });
    res.status(201).json({ orderProduct });
  } catch (error) {
    next(error);
  }
};

// Get all order products
exports.getAllOrderProducts = async (req, res, next) => {
  try {
    const orderProducts = await prisma.order_product.findMany();
    res.status(200).json({ orderProducts });
  } catch (error) {
    next(error);
  }
};

// Get order product by ID
exports.getOrderProductById = async (req, res, next) => {
  const orderProductId = req.params.id;
  try {
    const orderProduct = await prisma.order_product.findUnique({
      where: { id: parseInt(orderProductId) },
    });
    if (!orderProduct) {
      return res.status(404).json({ message: "Order product not found" });
    }
    res.status(200).json({ orderProduct });
  } catch (error) {
    next(error);
  }
};

// Update order product by ID
exports.updateOrderProductById = async (req, res, next) => {
  const orderProductId = req.params.id;
  const { quantity, orderId, seafoodId } = req.body;
  try {
    const updatedOrderProduct = await prisma.order_product.update({
      where: {
        id: parseInt(orderProductId),
      },
      data: {
        quantity,
        orderId,
        seafoodId,
      },
    });
    res.status(200).json({ orderProduct: updatedOrderProduct });
  } catch (error) {
    next(error);
  }
};

// Delete order product by ID
exports.deleteOrderProductById = async (req, res, next) => {
  const orderProductId = req.params.id;
  try {
    await prisma.order_product.delete({
      where: {
        id: parseInt(orderProductId),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
