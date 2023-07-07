import type { Meta, StoryObj } from '@storybook/react';

import FluorescentOutlined from '../../lib/device/FluorescentOutlined';

const meta: Meta<typeof FluorescentOutlined> = {
  component: FluorescentOutlined,
  tags: ['autodocs'],
  title: 'device/FluorescentOutlined',
};

export default meta;
type Story = StoryObj<typeof FluorescentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
