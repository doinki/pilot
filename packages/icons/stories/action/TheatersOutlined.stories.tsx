import type { Meta, StoryObj } from '@storybook/react';

import TheatersOutlined from '../../lib/action/TheatersOutlined';

const meta: Meta<typeof TheatersOutlined> = {
  component: TheatersOutlined,
  tags: ['autodocs'],
  title: 'action/TheatersOutlined',
};

export default meta;
type Story = StoryObj<typeof TheatersOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
