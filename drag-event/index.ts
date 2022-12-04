document.addEventListener('DOMContentLoaded', () => {
    const boxList: NodeListOf<HTMLElement> | null = document.querySelectorAll('.drag-box');
    const itemList: NodeListOf<HTMLElement> | null = document.querySelectorAll('.drag-box-item');
    if (boxList instanceof NodeList && itemList instanceof NodeList) {
        addBoxDragEvent(boxList);
        addItemDragEvent(itemList, boxList);
    }
})

function addBoxDragEvent(boxList: NodeListOf<HTMLElement>): void {
    boxList.forEach(el => {
        el.addEventListener('dragover', (e) => {
            e.preventDefault();
            const dragElement: HTMLElement | null = document.querySelector('.dragging');
            if (dragElement instanceof HTMLElement && !el.classList.contains('drop-disabled')) {
                const afterElement = getAfterElement(el, e.clientX);
                if (afterElement === undefined) {
                    el.appendChild(dragElement);
                    return;
                }
                el.insertBefore(dragElement, afterElement);
            }
        })
    })
}

function addItemDragEvent(itemList: NodeListOf<HTMLElement>, boxList: NodeListOf<HTMLElement>): void {
    itemList.forEach(el => {
        el.addEventListener('dragstart', (e) => {
            el.classList.add('dragging');
            boxList.forEach(box => {
                if (box.childElementCount > 2 && box != el.closest('.drag-box')) {
                    box.classList.add('drop-disabled');
                }
            })
        })
        el.addEventListener('dragend', (e) => {
            e.preventDefault();
            el.classList.remove('dragging');
            boxList.forEach(box => {
                box.classList.remove('drop-disabled');
            })
        })
    })
}

function getAfterElement(box: HTMLElement, xOffset: number): HTMLElement | undefined {
    const boxItemList: NodeListOf<HTMLElement> = box.querySelectorAll('.drag-box-item:not(.dragging)');
    const offset: number = xOffset - box.offsetLeft;
    for (let i = 0; i < boxItemList.length; i++) {
        const thisOffset: number = boxItemList[i].offsetLeft + (boxItemList[i].offsetWidth / 2) - box.offsetLeft;
        if (offset > 0 && offset < thisOffset) {
            return boxItemList[i];
        }
    }
    return undefined;
}