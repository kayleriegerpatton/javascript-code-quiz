## Application flow

- click start button
  - start timer
  - render first question card on page
- When user clicks/selects an answer
  - check if the selected answer is correct\
    - if answer is wrong then subtract X seconds from timer's remaining time and do not render next question (time remaining = score)
    - render the next question
      - if the question is the last question, then display score

### Timer Function

-
