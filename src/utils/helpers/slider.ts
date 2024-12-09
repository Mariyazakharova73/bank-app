export const calculateSliderMetrics = (
  filteredArticlesCount: number,
  sliderConfig: { cardGap: number; visibleCards: number; cardPartWidth: number },
  cardWidth: number,
) => {
  const scrollStep = cardWidth + sliderConfig.cardGap;

  const totalContentWidth =
    cardWidth * filteredArticlesCount + sliderConfig.cardGap * (filteredArticlesCount - 1);

  const containerWidth =
    cardWidth * sliderConfig.visibleCards + sliderConfig.cardGap * sliderConfig.visibleCards;

  const maxOffset = totalContentWidth - containerWidth;

  return { scrollStep, totalContentWidth, containerWidth, maxOffset };
};
