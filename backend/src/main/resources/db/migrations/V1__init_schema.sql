CREATE TABLE event_publication (
    id UUID NOT NULL,
    listener_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    serialized_event TEXT NOT NULL,
    publication_date TIMESTAMP(6) WITH TIME ZONE NOT NULL,
    completion_date TIMESTAMP(6) WITH TIME ZONE,
    PRIMARY KEY (id)
);
