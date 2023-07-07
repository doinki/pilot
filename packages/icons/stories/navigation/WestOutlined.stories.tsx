import type { Meta, StoryObj } from '@storybook/react';

import WestOutlined from '../../lib/navigation/WestOutlined';

const meta: Meta<typeof WestOutlined> = {
  component: WestOutlined,
  tags: ['autodocs'],
  title: 'navigation/WestOutlined',
};

export default meta;
type Story = StoryObj<typeof WestOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
