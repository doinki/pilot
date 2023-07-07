import type { Meta, StoryObj } from '@storybook/react';

import RocketOutlined from '../../lib/action/RocketOutlined';

const meta: Meta<typeof RocketOutlined> = {
  component: RocketOutlined,
  tags: ['autodocs'],
  title: 'action/RocketOutlined',
};

export default meta;
type Story = StoryObj<typeof RocketOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
