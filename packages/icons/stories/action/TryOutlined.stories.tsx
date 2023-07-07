import type { Meta, StoryObj } from '@storybook/react';

import TryOutlined from '../../lib/action/TryOutlined';

const meta: Meta<typeof TryOutlined> = {
  component: TryOutlined,
  tags: ['autodocs'],
  title: 'action/TryOutlined',
};

export default meta;
type Story = StoryObj<typeof TryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
