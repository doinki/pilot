import type { Meta, StoryObj } from '@storybook/react';

import ThirtyFpsSelectOutlined from '../../lib/image/ThirtyFpsSelectOutlined';

const meta: Meta<typeof ThirtyFpsSelectOutlined> = {
  component: ThirtyFpsSelectOutlined,
  tags: ['autodocs'],
  title: 'image/ThirtyFpsSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof ThirtyFpsSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
