import type { Meta, StoryObj } from '@storybook/react';

import TollOutlined from '../../lib/action/TollOutlined';

const meta: Meta<typeof TollOutlined> = {
  component: TollOutlined,
  tags: ['autodocs'],
  title: 'action/TollOutlined',
};

export default meta;
type Story = StoryObj<typeof TollOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
