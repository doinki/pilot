import type { Meta, StoryObj } from '@storybook/react';

import FilterNoneOutlined from '../../lib/image/FilterNoneOutlined';

const meta: Meta<typeof FilterNoneOutlined> = {
  component: FilterNoneOutlined,
  tags: ['autodocs'],
  title: 'image/FilterNoneOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterNoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
