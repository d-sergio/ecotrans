import {moveOrClick, moveOrTap} from '../move-or-click';

Если в слайдере есть слайды, являющиеся ссылками, предотвращает случайный
переход по ним при прокутке мышью или свайпами. Для этого на ссылки надо
повесить обработчики:

<a href={...} onMouseDown={moveOrClick} onTouchStart={moveOrTap}>
    ...
</a>

Тапы и клики обрабатываются немного по-разному, поэтому pointer-events не подходит