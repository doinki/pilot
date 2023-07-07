import type { Meta, StoryObj } from '@storybook/react';

import CountertopsOutlined from '../../lib/places/CountertopsOutlined';

const meta: Meta<typeof CountertopsOutlined> = {
  component: CountertopsOutlined,
  tags: ['autodocs'],
  title: 'places/CountertopsOutlined',
};

export default meta;
type Story = StoryObj<typeof CountertopsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
