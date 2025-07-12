import React from 'react';
import './App.css';
import Layout from './components/GeneralComponents/Layout';
import Card from './components/GeneralComponents/Card';

function App() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Dashboard' }
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div className="page-title">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-3">
        <Card title="Users">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Users</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="text-3xl">👥</div>
          </div>
        </Card>

        <Card title="Orders">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold">567</p>
            </div>
            <div className="text-3xl">🛍️</div>
          </div>
        </Card>

        <Card title="Revenue">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold">$12,345</p>
            </div>
            <div className="text-3xl">💰</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6 m-3">
        <Card title="Recent Activity">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
              <div>
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-gray-600">John Doe</p>
              </div>
              <span className="text-sm text-gray-500">2 minutes ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
              <div>
                <p className="font-medium">New order received</p>
                <p className="text-sm text-gray-600">Order #12345</p>
              </div>
              <span className="text-sm text-gray-500">1 hour ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
              <div>
                <p className="font-medium">Product updated</p>
                <p className="text-sm text-gray-600">iPhone 15 Pro</p>
              </div>
              <span className="text-sm text-gray-500">3 hours ago</span>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}

export default App;
