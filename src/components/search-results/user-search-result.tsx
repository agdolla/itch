import * as React from "react";
import * as classNames from "classnames";
import GenericSearchResult from "./generic-search-result";
import * as actions from "../../actions";

import Cover from "../basics/cover";

import { IUser } from "../../db/models/user";
import styled from "../styles";

const UserSearchResultDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin: 0 6px;

  .cover {
    width: 32px;
  }
`;

class UserSearchResult extends GenericSearchResult<IUserSearchResultProps> {
  render() {
    const { user, onClick, chosen } = this.props;
    const { displayName, username, stillCoverUrl, coverUrl } = user;

    return (
      <UserSearchResultDiv onClick={onClick} className={classNames({ chosen })}>
        <Cover
          className="cover"
          showGifMarker={false}
          coverUrl={coverUrl}
          stillCoverUrl={stillCoverUrl}
          gameId={user.id}
          square
          data-rh={displayName || username}
          data-rh-at="bottom"
        />
      </UserSearchResultDiv>
    );
  }

  getNavigateAction() {
    const { user } = this.props;
    return actions.navigateToUser({ user });
  }
}

interface IUserSearchResultProps {
  user: IUser;
  onClick: () => void;
  chosen: boolean;
  active: boolean;
}

export default UserSearchResult;
