      // 얕은 복사
      var arrA = ['a', 'b', 'c', 'd'];
      var arrB = arrA;
      console.log('arrA : ', arrA);
      console.log('arrB : ', arrB);

      console.log('값 변경 후');

      arrA[3] = 'e';
      arrB[4] = 'f';
      console.log('arrA : ', arrA);
      console.log('arrB : ', arrB);

      // slice() 배열 복사, 1차원 배열

      var arrA = ['a', 'b', 'c', 'd'];
      var arrB = arrA.slice();
      console.log('arrA : ', arrA);
      console.log('arrB : ', arrB);

      console.log('값 변경 후');

      arrA[3] = 'e';
      arrB[4] = 'f';
      console.log('arrA : ', arrA);
      console.log('arrB : ', arrB);

      // slice() 2차원 배열

      var arrA = ['a', 'b', ['c', 'd']];
      var arrB = arrA.slice();
      console.log('arrA : ', arrA);
      console.log('arrB : ', arrB);

      console.log('값 변경 후');

      arrA[0] = 'z';
      arrB[0] = 'x';

      arrA[2][0] = 'e';
      arrB[2][1] = 'f';
      console.log('arrA : ', arrA);
      console.log('arrB : ', arrB);

      // Object.assign 객체 복사 1 레벨

        var objectA = {
          name: 'Java'
      }
      
      var objectB = Object.assign({},objectA);
      
      console.log("objectA : ", objectA);
      console.log("objectB : ", objectB);
      
      console.log("값 변경 후");
      
      objectA.name = 'C Programming';
      objectB.name = 'React';
      
      console.log("objectA : ", objectA);
      console.log("objectB : ", objectB);

      // Object.assign 객체 복사 2 레벨

      var objectA = {
        name: 'Java',
        score: {
            A : 100,
            B : 200,
            C : 300
        }
    }
    
      var objectB = Object.assign({},objectA);
      
      console.log("objectA : ", objectA);
      console.log("objectB : ", objectB);
      
      console.log("값 변경 후");
      
      objectA.score.A = 500;
      objectB.score.C = 1000;
      
      objectA.name = 'C Programming';
      objectB.name = 'React';
      
      console.log("objectA : ", objectA);
      console.log("objectB : ", objectB);

      
      // 깊은 복사 - 재귀 함수
      const obj2 = {
        a: 1,
        b: {
          c: 2,
        },
      };
      
      function copyObj(obj) {
        const result = {};
      
        for (let key in obj) {
          if (typeof obj[key] === 'object') {
            result[key] = copyObj(obj[key]);
          } else {
            result[key] = obj[key];
          }
        }
      
        return result;
      }
      
      const copiedObj = copyObj(obj2);
      
      copiedObj.b.c = 3
      
      obj.b.c === copiedObj.b.c 

      // 깊은 복사 JSON

      const obj = {
        a: 1,
        b: {
          c: 2,
        },
      };
      
      const copiedObj = JSON.parse(JSON.stringify(obj));
      
      copiedObj.b.c = 3
      
      console.log(obj.b.c === copiedObj.b.c)