import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const WarnCard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'คุณยังไม่ได้ Log in',
      footer: '<a href="">Why do I have this issue?</a>'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/sigin');
      }
    });
  }, [navigate]);

  return (
    <div>
    </div>
  );
};

export default WarnCard;
