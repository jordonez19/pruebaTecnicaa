import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { fetchData } from './services/service';

const CardComponent = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPostData = async () => {
            const data = await fetchData();
            setPost(data);
        };

        fetchPostData();
    }, []);

    return (
        <>
            {post && post.map((p) => (
                p.userId === 5 ? (
                    <Card
                        key={p.id}
                        size="small"
                        title={`${p.userId}. ${p.id}`}
                        style={{ width: 'auto', textTransform: 'capitalize', marginBottom:'15px' }}
                    >
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                        <Button type="primary">Ver Post</Button>

                    </Card>
                ) : null
            ))}
        </>
    );
};

export default CardComponent;
