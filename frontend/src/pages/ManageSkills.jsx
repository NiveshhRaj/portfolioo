import { useEffect, useState } from "react";
import API from "../services/api";

function ManageSkills() {
  const [skills, setSkills] = useState([]);

  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    percentage: "",
    category: "",
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await API.get("/skills");

      setSkills(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await API.put(`/skills/${editId}`, {
          ...formData,
        });
        setEditId(null);

        fetchSkills();
      } else {
        await API.post("/skills", {
          ...formData,
          percentage: Number(formData.percentage),
        });

        fetchSkills();

        setFormData({
          name: "",
          percentage: "",
          category: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSkill = async (id) => {
    try {
      await API.delete(`/skills/${id}`);

      fetchSkills();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold">Manage Skills</h1>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="mt-12 bg-white/5 border border-gray-800 p-10 rounded-3xl"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-xl bg-black border border-gray-700 outline-none"
          />

          <input
            type="number"
            name="percentage"
            placeholder="Percentage"
            value={formData.percentage}
            onChange={handleChange}
            className="p-4 rounded-xl bg-black border border-gray-700 outline-none"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="p-4 rounded-xl bg-black border border-gray-700 outline-none"
          />
        </div>

        <button className="mt-8 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition">
          Add Skill
        </button>

        <button
          onClick={() => {
            setEditId(skill.id);

            setFormData({
              name: skill.name,

              percentage: skill.percentage,
            });
          }}
          className="mt-8 px-8 py-4 mx-4 rounded-full bg-blue-600 hover:bg-blue-700 transition">
          Edit
        </button>
      </form>

      {/* Skills List */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white/5 border border-gray-800 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold">{skill.name}</h2>

            <p className="text-gray-400 mt-4">{skill.category}</p>

            <div className="w-full h-3 bg-gray-800 rounded-full mt-6 overflow-hidden">
              <div
                style={{
                  width: `${skill.percentage}%`,
                }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              />
            </div>

            <p className="mt-4 text-purple-400">{skill.percentage}%</p>

            <button
              onClick={() => deleteSkill(skill.id)}
              className="mt-6 px-5 py-3 rounded-full bg-red-600 hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageSkills;
