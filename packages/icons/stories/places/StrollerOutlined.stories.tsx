import type { Meta, StoryObj } from '@storybook/react';

import StrollerOutlined from '../../lib/places/StrollerOutlined';

const meta: Meta<typeof StrollerOutlined> = {
  component: StrollerOutlined,
  tags: ['autodocs'],
  title: 'places/StrollerOutlined',
};

export default meta;
type Story = StoryObj<typeof StrollerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
