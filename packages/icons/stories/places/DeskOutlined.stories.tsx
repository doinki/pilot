import type { Meta, StoryObj } from '@storybook/react';

import DeskOutlined from '../../lib/places/DeskOutlined';

const meta: Meta<typeof DeskOutlined> = {
  component: DeskOutlined,
  tags: ['autodocs'],
  title: 'places/DeskOutlined',
};

export default meta;
type Story = StoryObj<typeof DeskOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
