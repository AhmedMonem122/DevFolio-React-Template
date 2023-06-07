import PortfolioItem from "./PortfolioItem";

function PortfolioList({ ...item }) {
  return <PortfolioItem {...item} />;
}

export default PortfolioList;
