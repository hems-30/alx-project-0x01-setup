import React, { useState } from "react";
import { UserModalProps, UserProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserProps>({
    id: Date.now(), // Generate a temporary id
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const field = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value
        }
      }));
    } else if (name.includes("geo.")) {
      const field = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [field]: value
          }
        }
      }));
    } else if (name.includes("company.")) {
      const field = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="input" />
        <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="input" />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input" />
        <input name="address.street" placeholder="Street" value={formData.address.street} onChange={handleChange} className="input" />
        <input name="address.suite" placeholder="Suite" value={formData.address.suite} onChange={handleChange} className="input" />
        <input name="address.city" placeholder="City" value={formData.address.city} onChange={handleChange} className="input" />
        <input name="address.zipcode" placeholder="Zipcode" value={formData.address.zipcode} onChange={handleChange} className="input" />
        <input name="geo.lat" placeholder="Latitude" value={formData.address.geo.lat} onChange={handleChange} className="input" />
        <input name="geo.lng" placeholder="Longitude" value={formData.address.geo.lng} onChange={handleChange} className="input" />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="input" />
        <input name="website" placeholder="Website" value={formData.website} onChange={handleChange} className="input" />
        <input name="company.name" placeholder="Company Name" value={formData.company.name} onChange={handleChange} className="input" />
        <input name="company.catchPhrase" placeholder="Catch Phrase" value={formData.company.catchPhrase} onChange={handleChange} className="input" />
        <input name="company.bs" placeholder="BS" value={formData.company.bs} onChange={handleChange} className="input" />

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
