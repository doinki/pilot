import type { Meta, StoryObj } from '@storybook/react';

import CopyrightOutlined from '../../lib/action/CopyrightOutlined';

const meta: Meta<typeof CopyrightOutlined> = {
  component: CopyrightOutlined,
  tags: ['autodocs'],
  title: 'action/CopyrightOutlined',
};

export default meta;
type Story = StoryObj<typeof CopyrightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
