import type { Meta, StoryObj } from '@storybook/react';

import UTurnLeftOutlined from '../../lib/maps/UTurnLeftOutlined';

const meta: Meta<typeof UTurnLeftOutlined> = {
  component: UTurnLeftOutlined,
  tags: ['autodocs'],
  title: 'maps/UTurnLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof UTurnLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
