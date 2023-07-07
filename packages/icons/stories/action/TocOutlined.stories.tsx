import type { Meta, StoryObj } from '@storybook/react';

import TocOutlined from '../../lib/action/TocOutlined';

const meta: Meta<typeof TocOutlined> = {
  component: TocOutlined,
  tags: ['autodocs'],
  title: 'action/TocOutlined',
};

export default meta;
type Story = StoryObj<typeof TocOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
