import type { Meta, StoryObj } from '@storybook/react';

import AutofpsSelectOutlined from '../../lib/image/AutofpsSelectOutlined';

const meta: Meta<typeof AutofpsSelectOutlined> = {
  component: AutofpsSelectOutlined,
  tags: ['autodocs'],
  title: 'image/AutofpsSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof AutofpsSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
