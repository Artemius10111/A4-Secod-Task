import React from 'react';
import { useGetPostsQuery } from './../api/postApi';
import { Col, Divider, Row } from 'antd';
import { Card, Space } from 'antd';
import { getPostTitle } from '../func/PostsFunc';

const Posts = (): JSX.Element => {
    const {data = [], isLoading} = useGetPostsQuery("1"); 
    return (
    <div className="postsBlock">
        { isLoading && <h1>Загрузка...</h1> }
        { !isLoading &&
            <div className="gridBlock">
            <Divider orientation="left">Посты</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    { data.map(post => { return (
                        <Col className="gutter-row" span={6} key={post.id}>
                            <div className="postBlock">
                                <Space direction="vertical" size={16}>
                                    <Card title={ getPostTitle(post) } size="small" style={{ width: 300, height: 250}}>
                                        <p>{ post.body }</p>
                                    </Card>
                                </Space>
                            </div>
                        </Col>
                    )})}
                </Row>
            </div>  
        }
    </div>
    )
};

export default Posts;