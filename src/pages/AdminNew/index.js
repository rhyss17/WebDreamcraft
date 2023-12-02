import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import { Button } from "components";

const AdminNewPage = () => {
  const navigate = useNavigate();
  const [establishmentId, setEstablishmentId] = useState("");
  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedDelete, setConfirmedDelete] = useState(false);

  const handleUpdate = async () => {
    if (!establishmentId) {
      console.error("Establishment ID is empty.");
      window.alert("Establishment ID is empty.");
      // Display an error message indicating the empty ID
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8092/Establishment/updateEstablishment/${establishmentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
          location: newLocation,
        }),
      });
  
      if (response.status === 404) {
        console.error(`Establishment with ID ${establishmentId} not found.`);
        window.alert("Establishment not found. Update failed.");
      } else if (response.ok) {
        console.log(`Establishment with ID ${establishmentId} updated successfully!`);
        window.alert("Establishment updated successfully!");
        navigate('/adminviewestablishmentone');
      } else {
        console.error(`Failed to update establishment with ID ${establishmentId}`);
        window.alert("ID not found, Update failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  

  const handleDelete = async () => {
    if (!establishmentId) {
      console.error("Establishment ID is empty.");
      window.alert("Establishment ID is empty.");
      // Display an error message indicating the empty ID
      return;
    }
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      // Perform deletion logic...
      // Example fetch call for deletion
      const response = await fetch(`http://localhost:8092/Establishment/deleteEstablishment/${establishmentId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        setConfirmedDelete(true); // Simulate deletion success
        setTimeout(() => {
          setConfirmedDelete(false);
          setShowConfirmation(false);
          navigate('/adminviewestablishmentone'); // Redirect to the update page after deletion
        }, 0); // Adjust the timeout duration as needed
      } else {
        console.error("Failed to delete establishment.");
        window.alert("ID not found");
        //navigate('/adminnew');
        // Handle error scenario
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col font-manrope items-center justify-start mx-auto w-full max-w-[800px] px-4">
      <div style={{ marginTop: '1in' }}></div> {/* Adding a large space */}
        <form className="w-full flex flex-col items-center">
        <div className="flex flex-col mb-4 w-full max-w-[400px]">
        <label htmlFor="name" className="mb-2" style={{ fontSize: '24px' }}>
              Establishment ID:
              <input
                type="text"
                id="eid"
                name="eid"
                value={establishmentId}
                onChange={(e) => setEstablishmentId(e.target.value)}
                className="border rounded-md py-2 px-3 mt-1 w-full"
              />
            </label>
          </div>
          <div className="flex flex-col mb-4 w-full max-w-[400px]">
          <label htmlFor="location" className="mb-2" style={{ fontSize: '24px' }}>
              New Name:
              <input
                type="text"
                id="newName"
                name="newName"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="border rounded-md py-2 px-3 mt-1 w-full"
              />
            </label>
          </div>
          <div className="flex flex-col mb-4 w-full max-w-[400px]">
          <label htmlFor="location" className="mb-2" style={{ fontSize: '24px' }}>
              New Location:
              <input
                type="text"
                id="newLocation"
                name="newLocation"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                className="border rounded-md py-2 px-3 mt-1 w-full"
              />
            </label>
          </div>
          <div className="flex justify-between w-full max-w-[400px]">
          <Button type="button" onClick={handleUpdate}>
            Update
          </Button>
          <Button type="button" onClick={handleDelete}>
            Delete
          </Button>

        <Button type="button" onClick={() => navigate("/adminviewestablishmentone")}>
          Go back
        </Button>
        </div>
        </form>
        {showConfirmation && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-70 z-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
              <div className="p-4">
                <p className="text-lg font-semibold mb-4">Confirm Deletion</p>
                <p className="mb-4">Are you sure you want to delete this establishment?</p>
                <div className="flex justify-end">
                  <Button type="button" onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">
                    Yes
                  </Button>
                  <Button type="button" onClick={cancelDelete} className="border border-gray-300 px-4 py-2 rounded-md">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {confirmedDelete && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-8 rounded-md">
              <p>Establishment deleted successfully!</p>
            </div>
          </div>         
        ) }
      </div>
    </>
  );
};

export default AdminNewPage;
