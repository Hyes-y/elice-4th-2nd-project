import React from "react";
import WordTraining from "./WordTraining";
import TrainingGuide from "./TrainingGuide";
import {
  TrainingSubjectContainer,
  TrainingStepTitle,
  TrainingSubjectWrap,
  TrainingStepIntroduction,
  Hilight,
} from "../../styles/TrainingStyle";
function TrainingStepOne() {
  return (
    <TrainingGuide>
      <TrainingSubjectContainer>
        <TrainingSubjectWrap>
          <TrainingStepTitle>1단계</TrainingStepTitle>
          <TrainingStepIntroduction>
            가장 기본은 문장의 의미를 <Hilight>정확하게 아는 것</Hilight>이
            중요합니다. <br />
            간단한 단어 퀴즈를 통해 <Hilight>어휘력</Hilight>을 길러봅시다!
            <br />
            제시된 단어의 뜻을 생각해보세요.
          </TrainingStepIntroduction>
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>
      <WordTraining />
    </TrainingGuide>
  );
}

export default TrainingStepOne;
