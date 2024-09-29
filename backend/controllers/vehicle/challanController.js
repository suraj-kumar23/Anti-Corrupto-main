const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new challan
const createChallan = async (req, res) => {
  try {
    const { amount, reason, vehicleId} = req.body;
    console.log("hi1",amount,reason,vehicleId);
    if ( !amount || !reason || !vehicleId) {
      return res.status(203).json({ error: 'Please provide all required fields' });
    }
    console.log("hi2");
    
    const challan = await prisma.challan.create({
      data: {
        fine:amount,
        reason,
        vehicleId,
        location: "Delhi",
      }
    });
    console.log("hi3");

    res.status(200).json(challan);
  } catch (error) {

    res.status(203).json({ error: 'Error creating challan', details: error.message });
  }
};

// Get all challans
const getAllChallans = async (req, res) => {
  try {
    const challans = await prisma.challan.findMany();
    res.status(200).json(challans);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching challans', details: error.message });
  }
};

// Get challan by ID`
const getChallanById = async (req, res) => {
  const id = req.params.id;
  try {
    const challan = await prisma.challan.findUnique({
      where: { id }
    });
    if (!challan) {
      res.status(404).json({ error: 'Challan not found' });
    } else {
      res.status(200).json(challan);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching challan', details: error.message });
  }
};

// Update challan by ID
const updateChallan = async (req, res) => {
  const id = req.params.id;
  const { issueDate, amount, reason, vehicleId } = req.body;
  try {
    const challan = await prisma.challan.update({
      where: { id },
      data: { issueDate, amount, reason, vehicleId }
    });
    res.status(200).json(challan);
  } catch (error) {
    res.status(500).json({ error: 'Error updating challan', details: error.message });
  }
};

// Delete challan by ID
const deleteChallan = async (req, res) => {
  const id = req.params.id;
  try {
    const challan = await prisma.challan.delete({
      where: { id }
    });
    res.status(200).json(challan);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting challan', details: error.message });
  }
};

module.exports = {
  createChallan,
  getAllChallans,
  getChallanById,
  updateChallan,
  deleteChallan
};
