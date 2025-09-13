// controllers/deliveryController.js
import Delivery from "../models/Delivery.js";

// ✅ Create Delivery
export const saveDelivery = async (req, res) => {
  try {
    const { address, city, postalCode, userId } = req.body;
    const newDelivery = new Delivery({ address, city, postalCode, userId });
    await newDelivery.save();

    res.status(201).json({ message: "Delivery address saved", data: newDelivery });
  } catch (error) {
    res.status(500).json({ message: "Error saving delivery", error: error.message });
  }
};

// ✅ Get All Deliveries
export const getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching deliveries", error: error.message });
  }
};

// ✅ Get Single Delivery
export const getDeliveryById = async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.id);
    if (!delivery) return res.status(404).json({ message: "Delivery not found" });
    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: "Error fetching delivery", error: error.message });
  }
};

// ✅ Update Delivery
export const updateDelivery = async (req, res) => {
  try {
    const { address, city, postalCode } = req.body;
    const updatedDelivery = await Delivery.findByIdAndUpdate(
      req.params.id,
      { address, city, postalCode },
      { new: true }
    );

    if (!updatedDelivery) return res.status(404).json({ message: "Delivery not found" });
    res.status(200).json({ message: "Delivery updated", data: updatedDelivery });
  } catch (error) {
    res.status(500).json({ message: "Error updating delivery", error: error.message });
  }
};

// ✅ Delete Delivery
export const deleteDelivery = async (req, res) => {
  try {
    const deletedDelivery = await Delivery.findByIdAndDelete(req.params.id);
    if (!deletedDelivery) return res.status(404).json({ message: "Delivery not found" });
    res.status(200).json({ message: "Delivery deleted", data: deletedDelivery });
  } catch (error) {
    res.status(500).json({ message: "Error deleting delivery", error: error.message });
  }
};
