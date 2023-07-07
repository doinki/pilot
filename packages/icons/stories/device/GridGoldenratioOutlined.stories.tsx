import type { Meta, StoryObj } from '@storybook/react';

import GridGoldenratioOutlined from '../../lib/device/GridGoldenratioOutlined';

const meta: Meta<typeof GridGoldenratioOutlined> = {
  component: GridGoldenratioOutlined,
  tags: ['autodocs'],
  title: 'device/GridGoldenratioOutlined',
};

export default meta;
type Story = StoryObj<typeof GridGoldenratioOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
