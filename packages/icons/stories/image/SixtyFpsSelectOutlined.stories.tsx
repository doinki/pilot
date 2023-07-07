import type { Meta, StoryObj } from '@storybook/react';

import SixtyFpsSelectOutlined from '../../lib/image/SixtyFpsSelectOutlined';

const meta: Meta<typeof SixtyFpsSelectOutlined> = {
  component: SixtyFpsSelectOutlined,
  tags: ['autodocs'],
  title: 'image/SixtyFpsSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof SixtyFpsSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
