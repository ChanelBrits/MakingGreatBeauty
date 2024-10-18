export type Service = {
  name: string;
  price: string;
}

export type Block = {
  title: string;
  services: Service[];
}

export type PricingProps = {
  blocks: Block[];
}

/*
  - Merge blocks with less than or equal to 2 services
  - Titles should be kept, not concatenated
  - Pricing should be amended to conditionally render another title (sometimes there can be 3 titles)
  - Shouldn't have more than 4 services in a block
*/

// export const mergeBlocks = (blocks: Block[]) => {
//   let mergedBlocks = [];
//   let currentBlock: Block | null = null;

//   const pushCurrentBlock = () => {
//     if (currentBlock) {
//       mergedBlocks.push(currentBlock);
//       currentBlock = null;
//     }
//   };


// }

/* 
 * - Create a separate function to analyse the services
 * - Services shouldn't get mixed up together, the services should still be underneath the corresponding title
 * - it should create a new object that looks like this but it should be dynamic
 * 1: {
      title: "Gel Overlay",
      services: [
        {name: "Gel Polish", price: "250"},
        {name: "Gel Polish (French)", price: "270"}
      ],
      title: "Foot Reflexology",
      services: [
        {name: "Both Feet (30 Mins)", price: "250"}
      ]
    },
 */

