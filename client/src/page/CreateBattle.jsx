import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles";
import { useGlobalContext } from "../context";
import { PageHOC, CustomButton, CustomInput } from "../components";

const CreateBattle = () => {
  const navigate = useNavigate();
  const { contract, battleName, setBattleName } = useGlobalContext();

  const handleClick = () => {};

  return (
    <>
      <div className="flex flex-col mb-5">
        <CustomInput
          label="Battle"
          placeholder="Enter battle name"
          value={battleName}
          handleValueChange={setBattleName}
        />
        <CustomButton
          title="Create Battle"
          handleClick={handleClick}
          restType="mt-6"
        />
      </div>
    </>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <>Create your battle now and wait other players to join</>
);
