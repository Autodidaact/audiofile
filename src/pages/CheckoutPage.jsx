import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import OrderSummary from '../components/Checkout/OrderSummary';
import ConfirmationModal from '../components/Checkout/ConfirmationModal';

export default function CheckoutPage() {
  const { cart, createOrder, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    address: '', zip: '', city: '', country: '',
    paymentMethod: 'e-Money', eMoneyNumber: '', eMoneyPin: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (cart.length === 0 && !showConfirmation) {
      navigate('/');
    }
  }, [cart, navigate, showConfirmation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) error = 'Required';
    else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email';
    else if (name === 'paymentMethod' && !['e-Money', 'Cash'].includes(value)) error = 'Select method';
    else if (formData.paymentMethod === 'e-Money') {
      if (name === 'eMoneyNumber' && !/^\d{9}$/.test(value)) error = '9 digits';
      if (name === 'eMoneyPin' && !/^\d{4}$/.test(value)) error = '4 digits';
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const validateForm = () => {
    const fields = ['name', 'email', 'phone', 'address', 'zip', 'city', 'country'];
    const paymentFields = formData.paymentMethod === 'e-Money' ? ['eMoneyNumber', 'eMoneyPin'] : [];
    return [...fields, ...paymentFields].every(f => validateField(f, formData[f]));
  };

  const handlePay = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      createOrder({ ...formData, total });
      clearCart();
      setShowConfirmation(true); // keep modal open
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowConfirmation(false);
    navigate('/');
  };

  return (
    <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <CheckoutForm
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        handleChange={handleChange}
      />
      <OrderSummary onPay={handlePay} isSubmitting={isSubmitting} />
      {showConfirmation && <ConfirmationModal onClose={closeModal} />}
    </div>
  );
}
