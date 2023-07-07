import type { Meta, StoryObj } from '@storybook/react';

import AutoFixNormalOutlined from '../../lib/image/AutoFixNormalOutlined';

const meta: Meta<typeof AutoFixNormalOutlined> = {
  component: AutoFixNormalOutlined,
  tags: ['autodocs'],
  title: 'image/AutoFixNormalOutlined',
};

export default meta;
type Story = StoryObj<typeof AutoFixNormalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
