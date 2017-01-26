insert into users(facebookid, displayname)
  values($1, $2)
  returning(facebookid, displayname);
