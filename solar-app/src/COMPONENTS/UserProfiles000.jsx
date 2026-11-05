
import React from "react";

const user = {
  name: "Rohit Gudse",
  email: "rohit@example.com",
  role: "Admin",
  status: "Active",
  location: "Mumbai, India",
  joined: "January 2025",
  avatar: "https://i.pravatar.cc/150?img=12",
};

const UserProfile = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
      {/* Profile Header */}
      <div className="h-28 bg-gradient-to-r from-blue-600 to-emerald-500" />

      {/* Profile Information */}
      <div className="-mt-12 px-6 pb-6">
        <div className="flex items-end justify-between">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
          />

          <span className="mb-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            ● {user.status}
          </span>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">
            {user.name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {user.role}
          </p>
        </div>

        <div className="my-5 border-t border-gray-100" />

        {/* User Details */}
        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium uppercase text-gray-400">
              Email Address
            </p>
            <p className="mt-1 break-all text-sm font-medium text-gray-700">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-400">
              Location
            </p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              {user.location}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-400">
              Member Since
            </p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              {user.joined}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          onClick={() => alert("Edit Profile clicked")}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
