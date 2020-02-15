export default {
  data: [
    // {
    //     id:'album_001',     //每个相册独一无二的id
    //     name:'Fang Ren for Wrong Space',  //相册名称
    //     statement:[   //注意书写格式,如需分段
    //         'paragraph 1',
    //         'paragraph 2',
    //         'paragraph 2',
    //     ],
    //     children:[ //相册下的每一张图片
    //         {
    //             id:'photo_001', //图片独一无二的id
    //             name:'photo_001', //图片名称
    //             url:'http://www.aeligo.com/resources/album1_img1.jpg', //图片地址
    //             parentId:'album_001', //属于哪个相册，填写相册的id
    //         },
    //         {
    //             id:'photo_002',
    //             name:'photo_002',
    //             url:'http://www.aeligo.com/resources/album1_img2.jpg',
    //             parentId:'album_001',
    //         },
    //         {
    //             id:'photo_003',
    //             name:'photo_003',
    //             url:'http://www.aeligo.com/resources/album1_img3.jpg',
    //             parentId:'album_001',
    //         }
    //     ]
    // },

    {
      id: 'album_002',
      name: 'Japan, Summer 2019',
      statement: [
        '1. Fisherman, Shizuoka, 2019',
        '2. Fireworks, Atami, 2019',
        '3. Beach Tower, Ito, 2019',
        '4. Sliding Door, Atami, 2019',
      ],
      children: [
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/jp199.jpg',
          parentId: 'album_002',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/jp196.jpg',
          parentId: 'album_002',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/g22.jpg',
          parentId: 'album_002',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/jp197.jpg',
          parentId: 'album_002',
        },

        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/jp193.jpg',
          parentId: 'album_002',
        },
      ],
    },
    {
      id: 'album_003',
      name: 'Recently',
      statement: ['2019'],
      children: [
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/stilllife2.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/stilllife4.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/stilllife3.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/stilllife1.jpg',
          parentId: 'album_003',
        },
      ],
    },
    {
      id: 'album_003',
      name: 'Renfang for Wrong Space',
      statement: ['July, 2018'],
      children: [
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/renfang10.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/renfang2.jpg',
          parentId: 'album_003',
        },

        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/renfang11.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/renfang14.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/renfang8.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/renfang13.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/renfang9.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/renfang6.jpg',
          parentId: 'album_003',
        },

        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/renfang12.jpg',
          parentId: 'album_003',
        },

        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/renfang15.jpg',
          parentId: 'album_003',
        },
      ],
    },

    {
      id: 'album_003',
      name: 'Still Life',
      statement: ['Still Life collaboration with Zipeng Li, 2018'],
      children: [
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/zipeng1.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/zipeng2.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/zipeng3.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/zipeng6.jpg',
          parentId: 'album_003',
        },

        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/zipeng4.jpg',
          parentId: 'album_003',
        },

        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/zipeng9.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/zipeng8.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/zipeng7.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/zipeng5.jpg',
          parentId: 'album_003',
        },
      ],
    },

    {
      id: 'album_003',
      name: 'Studio Visits',
      statement: ['Illustrator Smoooon photographed in her studio, Guangzhou, China, 2019'],
      children: [
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/smoooon1.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/smoooon7.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/smoooon4.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/smoooon2.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/smoooon8.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/smoooon10.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/smoooon5.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/smoooon9.jpg',
          parentId: 'album_003',
        },
      ],
    },

    {
      id: 'album_002',
      name: 'Pronounce AW18',
      statement: ['PRONOUNCE AW18 Fashion Week Backstage Reportage', 'Shanghai', '2018'],
      children: [
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h1.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h4.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h17.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h19.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h13.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h15.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h5.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h2.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h7.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h3.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h22.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h14.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h10.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h9.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h8.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/h21.jpg',
          parentId: 'album_003',
        },
      ],
    },

    {
      id: 'album_003',
      name: 'Home Truly',
      statement: ['Australia', '2016-2017'],
      children: [
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/a2.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/a18.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/a16.jpg',
          parentId: 'album_003',
        },
      ],
    },

    {
      id: 'album_004',
      name: 'I',
      statement: ['China', '2019'],
      children: [
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u1.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u2.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u18.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u17.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u3.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u10.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u16.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u11.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u15.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u7.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u12.jpg',
          parentId: 'album_003',
        },
        {
          id: 'photo_001',
          name: 'photo_001',
          url: 'http://www.yingdaxu.com/resource/u19.jpg',
          parentId: 'album_003',
        },
      ],
    },
  ],
};
