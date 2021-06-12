import React from 'react';
import { useParams } from 'react-router-dom';
import PontosForm from 'components/Pontos/Form/Form';
import UIContainer from 'components/UI/Container/Container';

const PagesPontosForm = () => {
  const { id } = useParams();

  return (
    <UIContainer>
      <PontosForm />
    </UIContainer>
  );
}

export default PagesPontosForm;
