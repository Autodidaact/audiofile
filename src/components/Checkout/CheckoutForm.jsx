import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import FormInput from '../UI/FormInput';

export default function CheckoutForm({ formData, setFormData, errors, handleChange }) {
    return (
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-8">Checkout</h2>
        {/* Billing */}
        <section className="mb-8">
          <h3 className="text-sm font-bold tracking-wider mb-4">Billing Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
            <FormInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
            <FormInput label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} />
          </div>
        </section>
  
        {/* Shipping Info */}
        <section className="mb-8">
          <h3 className="text-sm font-bold tracking-wider mb-4">Shipping Info</h3>
          <FormInput label="Address" name="address" value={formData.address} onChange={handleChange} error={errors.address} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <FormInput label="ZIP Code" name="zip" value={formData.zip} onChange={handleChange} error={errors.zip} />
            <FormInput label="City" name="city" value={formData.city} onChange={handleChange} error={errors.city} />
          </div>
          <FormInput label="Country" name="country" className="mt-4" value={formData.country} onChange={handleChange} error={errors.country} />
        </section>
  
        {/* Payment */}
        <section>
          <h3 className="text-sm font-bold tracking-wider mb-4">Payment Details</h3>
          <div className="space-y-4">
            {['e-Money', 'Cash'].map(method => (
              <label key={method} className="flex items-center border p-4 rounded-lg">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={formData.paymentMethod === method}
                  onChange={handleChange}
                  className="mr-4"
                />
                {method === 'e-Money' ? 'e-Money' : 'Cash on Delivery'}
              </label>
            ))}
          </div>
  
          {formData.paymentMethod === 'e-Money' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <FormInput label="e-Money Number" name="eMoneyNumber" value={formData.eMoneyNumber} onChange={handleChange} error={errors.eMoneyNumber} />
              <FormInput label="e-Money PIN" name="eMoneyPin" value={formData.eMoneyPin} onChange={handleChange} error={errors.eMoneyPin} />
            </div>
          )}
  
          {formData.paymentMethod === 'Cash' && (
             <div className="flex items-center gap-8">
             <img
               src="./assets/checkout/icon-cash-on-delivery.svg"
               alt="Cash on delivery"
               className="w-12 h-12"
             />
             <p className="text-gray-500">
               The 'Cash on Delivery' option enables you to pay in cash when our
               delivery courier arrives at your residence. Just make sure your
               address is correct so that your order will not be cancelled.
             </p>
           </div>
          )}
        </section>
      </div>
    );
  }
  