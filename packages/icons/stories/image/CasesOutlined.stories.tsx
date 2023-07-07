import type { Meta, StoryObj } from '@storybook/react';

import CasesOutlined from '../../lib/image/CasesOutlined';

const meta: Meta<typeof CasesOutlined> = {
  component: CasesOutlined,
  tags: ['autodocs'],
  title: 'image/CasesOutlined',
};

export default meta;
type Story = StoryObj<typeof CasesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
