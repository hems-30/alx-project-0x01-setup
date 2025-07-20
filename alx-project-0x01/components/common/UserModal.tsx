import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  if (!isOpen) return null; // modal not visible if closed

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section?: string,
    subsection?: string
  ) => {
    const { name, value } = e.target;

    if (section && subsection) {
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [subsection]: { ...prev[section][subsection], [name]: value } },
      }));
    } else if (section) {
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser(formData);
    onClose();
    // Optionally reset form here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto max-h-[70vh]">
          {/* Name */}
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          {/* Username */}
          <input
            required
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 border rounded"
          />
          {/* Email */}
          <input
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          {/* Address */}
          <input
            required
            name="street"
            value={formData.address.street}
            onChange={(e) => handleChange(e, "address")}
            placeholder="Street"
            className="w-full p-2 border rounded"
          />
          <input
            required
            name="suite"
            value={formData.address.suite}
            onChange={(e) => handleChange(e, "address")}
            placeholder="Suite"
            className="w-full p-2 border rounded"
          />
          <input
            required
            name="city"
            value={formData.address.city}
            onChange={(e) => handleChange(e, "address")}
            placeholder="City"
            className="w-full p-2 border rounded"
          />
          <input
            required
            name="zipcode"
            value={formData.address.zipcode}
            onChange={(e) => handleChange(e, "address")}
            placeholder="Zipcode"
            className="w-full p-2 border rounded"
          />
          {/* Phone */}
          <input
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-2 border rounded"
          />
          {/* Website */}
          <input
            required
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full p-2 border rounded"
          />
          {/* Company Name */}
          <input
            required
            name="name"
            value={formData.company.name}
            onChange={(e) => handleChange(e, "company")}
            placeholder="Company Name"
            className="w-full p-2 border rounded"
          />
          {/* Company CatchPhrase */}
          <input
            required
            name="catchPhrase"
            value={formData.company.catchPhrase}
            onChange={(e) => handleChange(e, "company")}
            placeholder="CatchPhrase"
            className="w-full p-2 border rounded"
          />
          {/* Company BS */}
          <input
            required
            name="bs"
            value={formData.company.bs}
            onChange={(e) => handleChange(e, "company")}
            placeholder="BS"
            className="w-full p-2 border rounded"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;