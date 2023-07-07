import type { Meta, StoryObj } from '@storybook/react';

import TornadoOutlined from '../../lib/social/TornadoOutlined';

const meta: Meta<typeof TornadoOutlined> = {
  component: TornadoOutlined,
  tags: ['autodocs'],
  title: 'social/TornadoOutlined',
};

export default meta;
type Story = StoryObj<typeof TornadoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
