import type { Meta, StoryObj } from '@storybook/react';

import TwentyFourMpOutlined from '../../lib/image/TwentyFourMpOutlined';

const meta: Meta<typeof TwentyFourMpOutlined> = {
  component: TwentyFourMpOutlined,
  tags: ['autodocs'],
  title: 'image/TwentyFourMpOutlined',
};

export default meta;
type Story = StoryObj<typeof TwentyFourMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
