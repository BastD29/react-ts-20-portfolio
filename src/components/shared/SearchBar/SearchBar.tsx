import { ChangeEvent, FC, useState } from "react";

import { SearchIcon } from "../../../assets/icons/SearchIcon/SearchIcon";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Form } from "../Form/Form";

import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <Form onSubmit={handleSearch} className={styles["search-bar"]}>
      <Input
        className={styles["search-bar__input"]}
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <Button
        className={styles["search-bar__button"]}
        type="submit"
        icon={<SearchIcon color="#FFFFFF" width={20} height={20} />}
      />
    </Form>
  );
};

export { SearchBar };
